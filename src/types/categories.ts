export type CategoriesType = {
  title: string;
  description: string;
  definition: string[];
  path: string;
  image: string;
  headerImage: string;
  progress: number;
  subjects: SubjectType[];
};

export type SubjectType = {
  title: string;
  description: string;
  completed: boolean;
  notes: Notes[];
  resource: ResourceType[];
};

export type ResourceType = {
  type: string;
  url: string;
};

export type CategoryHeaderPropsType = {
  headerImg: string[] | undefined;
};

export type SubjectPropsType = {
  subjects: SubjectType[][] | undefined;
};

export type VideoResourcePropsType = {
  url: string[];
  onEnded: () => void;
};

export type VideoResourceRef = {
  getCurrentTime: () => number;
  seekTo: (seconds: number) => void;
};

export type AddUserDataWithCategories = {
  title: string;
  progress: number;
  subjects: AddUserDateWithSubjects[];
};

export type AddUserDateWithSubjects = Pick<SubjectType, "title" | "completed">;

// Notes
export type Notes = {
  time: number;
  text: string;
  formattedTime: string;
};

export type NotesProps = {
  notes: Notes[];
  onAddNote: (text: string) => void;
  onNoteClick: (time: number) => void;
};
