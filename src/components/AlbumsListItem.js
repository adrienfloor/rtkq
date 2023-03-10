import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

const AlbumsListItem = ({ album }) => {

  const [removeAlbum, results] = useRemoveAlbumMutation()

  const header = (
    <>
      <Button
        className="mr-2"
        onClick={() => removeAlbum(album)}
        loading={results.isLoading}
      >
        <GoTrashcan />
      </Button>
      {album.title}
    </>
  )
  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotosList album={album} />
    </ExpandablePanel>
  );
}

export default AlbumsListItem
