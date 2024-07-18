import React, { useRef, useState } from "react";
import { useParams } from "react-router";
import { useFetchCategory } from "../../hooks/useFetchCategory";
import { updateLearningData } from "../../util/api";
import VideoResource from "../../components/professional-development/subjects/VideoResource";
import NotesComponent from "../../components/professional-development/subjects/Notes";
import { Notes, VideoResourceRef } from "../../types/categories";

const LearningSubject = () => {
  const categories = useFetchCategory();
  const { categoryName, subjectName } = useParams();
  const [completedVideos, setCompletedVideos] = useState(true);
  // const [playing, setPlaying] = useState(false);
  const [notes, setNotes] = useState<Notes[]>([]);
  const videoPlayerRef = useRef<VideoResourceRef>(null);
  const uid = localStorage.getItem("user_uid");

  const categoryTitle = categories
    ?.filter((category) => category.path === `/${categoryName}`)
    .map((category) => category.title);

  const categoryData = categories
    ?.filter((category) => category.path === `/${categoryName}`)
    .map((category) => category);

  const onEndedHandler = async (
    uid: string | null,
    categoryTitle: string,
    subjectTitle: string
  ) => {
    setCompletedVideos(completedVideos);
    await updateLearningData(uid, categoryTitle, subjectTitle);
  };

  const handleAddNote = (text: string) => {
    if (videoPlayerRef.current) {
      const time = videoPlayerRef.current.getCurrentTime();
      console.log(time % 60);
      setNotes([...notes, { time, text }]);
    }
  };

  const handleNoteClick = (time: number) => {
    console.log(time);
    videoPlayerRef.current?.seekTo(time);
  };

  return (
    <>
      <div>
        <span>{categoryTitle}</span>
        <h3>{subjectName}</h3>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2">
          {categoryData?.map((categories) =>
            categories.subjects
              .filter((subjects) => subjects.title === subjectName)
              .map((subject) => {
                const videoUrl = subject.resource.map(
                  (resource) => resource.url
                );
                const subjectTitle = subject.title;
                const categoryTitle = categories.title;

                return (
                  <div key={subjectTitle}>
                    <VideoResource
                      ref={videoPlayerRef}
                      url={videoUrl}
                      onEnded={() =>
                        onEndedHandler(uid, categoryTitle, subjectTitle)
                      }
                    />
                  </div>
                );
              })
          )}
        </div>
        <NotesComponent
          notes={notes}
          onAddNote={handleAddNote}
          onNoteClick={handleNoteClick}
        />
      </div>
    </>
  );
};

export default LearningSubject;
