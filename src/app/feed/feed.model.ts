 export interface Feed{
    id: number;
    profilepic: string;
    Profile: string
    url: string;
    likes: number;
    descricao: string;
    comment: CommentSession[];
 }

 export interface CommentSession{
     commentprofile:string;
     commenttext:string;
 }