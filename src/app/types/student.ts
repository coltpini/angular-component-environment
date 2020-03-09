export interface Student {
  id: number;
  name: string;
  first_name: string;
  last_name: string;
  avatar_attachment_id: string;
}

export const defaultStudentData = {
  id: 0,
  name: '',
  first_name: '',
  last_name: '',
  avatar_attachment_id: 'https://my.otus.com/assets/images/placeholder-profile-image.png'
};

export const testStudentData = {
  id: 0,
  name: 'Name',
  first_name: 'First Name',
  last_name: 'Last Name',
  avatar_attachment_id: 'https://my.otus.com/assets/images/placeholder-profile-image.png'
};
