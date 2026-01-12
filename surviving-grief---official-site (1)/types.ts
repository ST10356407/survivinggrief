
export interface Review {
  id: number;
  author: string;
  content: string;
  rating: number;
}

export interface ReflectionResponse {
  reflection: string;
  authorNote: string;
}
