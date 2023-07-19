import Button from './Button.js';

export default function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>Frien name</label>
      <input type="text" />

      <label>📷 Image Url</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
}
