import { useRef, useState } from "react";
import { useLocation, useParams } from "react-router";
import { useFetchCategory } from "../../hooks/useFetchCategory";
import { addUserNotes, updateLearningData } from "../../util/api";
import VideoResource from "../../components/professional-development/subjects/VideoResource";
import NotesComponent from "../../components/professional-development/subjects/Notes";
import { Notes, VideoResourceRef } from "../../types/categories";
import { formatTime } from "../../util/formatTime";

const LearningSubject = () => {
  const categories = useFetchCategory();
  const { categoryPath, subjectPath } = useParams();
  const [completedVideos, setCompletedVideos] = useState(true);
  // const [playing, setPlaying] = useState(false);
  const [notes, setNotes] = useState<Notes[]>([]);
  const videoPlayerRef = useRef<VideoResourceRef>(null);
  const uid = localStorage.getItem("user_uid");

  const categoryTitle = categories
    ?.filter((category) => category.path === `/${categoryPath}`)
    .map((category) => category.title)
    .join(", ");

  const subjectTitle = categories
    ?.filter((category) => category.path === `/${categoryPath}`)
    .flatMap((category) =>
      category.subjects.filter((subject) => subject.title === subjectPath)
    )
    .map((subject) => subject.title)
    .join(", ");

  const categoryData = categories
    ?.filter((category) => category.path === `/${categoryPath}`)
    .map((category) => category);

  const onEndedHandler = async (
    uid: string | null,
    categoryTitle: string,
    subjectTitle: string
  ) => {
    setCompletedVideos(completedVideos);
    await updateLearningData(uid, categoryTitle, subjectTitle);
  };

  const handleAddNote = async (text: string) => {
    if (videoPlayerRef.current) {
      const time = videoPlayerRef.current.getCurrentTime();
      const formattedTime = formatTime(time);
      setNotes([...notes, { time, text, formattedTime }]);

      console.log(subjectTitle);
      await addUserNotes(
        uid,
        categoryTitle,
        subjectTitle,
        text,
        time,
        formattedTime
      );
    }
  };

  const handleNoteClick = (time: number) => {
    const formatedTime = formatTime(time);
    videoPlayerRef.current?.seekTo(time);
  };

  return (
    <>
      <div>
        <span>{categoryTitle}</span>
        <h3>{subjectPath}</h3>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2">
          {categoryData?.map((categories) =>
            categories.subjects
              .filter((subjects) => subjects.title === subjectPath)
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
