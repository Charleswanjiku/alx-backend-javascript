//Exporting functions declarations for image upload and user handle
import { uploadPhoto, createUser } from './utils';
//Exporting functions declarations for asyncUploadUser
export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    return Promise.resolve({
      photo, user,
    });
  } catch (err) {
    return Promise.resolve({
      photo: null,
      user: null,
    });
  }
}
