import NavbarComponent from "../common/Navbar";
import { Table, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import CommonModal from "../common/Modal";
import FormInput from "../common/formInput";
import { useDispatch, useSelector } from "react-redux";
import {
  CreateEbookAction,
  DeleteEbookAction,
  GetEbookAction,
  UpdateEbookAction,
} from "../../redux/actions/ebookaction";
// import e from "express";

export default function EbookListing() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { ebookList } = useSelector((state) => state.ebook);
  const [edit, setEdit] = useState(false);
  const [selectEbook, setSelectEbook] = useState({});
  const [data, setData] = useState({
    ebook_title: "",
    ebook_author: "",
    ebook_genre: "",
    ebook_review: "",
    ebook_favorite: "",
  });

  const onHandleEbook = async (id) => {
    const selectedEbooklist = ebookList?.find((ebook) => ebook.e_id == id);
    setSelectEbook(selectedEbooklist);
    setData(selectedEbooklist);
    setOpen(!open);
    setEdit(!edit);
  };
  const OnHandleSubmit = async () => {
    const responseData = await dispatch(CreateEbookAction(data));

    if (responseData.is_success == true) {
      alert("Ebook Added SuccessFully");
      await dispatch(GetEbookAction());
      setOpen(!open);
    } else {
      alert("Error in Adding Ebook");
      setOpen(!open);
    }
  };
  const OnHandleUpdateSubmit = async () => {
    const responseData = await dispatch(UpdateEbookAction(data.e_id, data));

    if (responseData.is_success == true) {
      alert("Ebook Edited SuccessFully");
      await dispatch(GetEbookAction());
      setOpen(!open);
    } else {
      alert("Error in Editing Ebook");
      setOpen(!open);
    }
  };
  const onHandleDelete = async (id) => {
    await dispatch(DeleteEbookAction(id));
  };
  useEffect(() => {
    async function getEbookList() {
      await dispatch(GetEbookAction());
    }
    getEbookList();
  }, []);
  console.log(data);
  return (
    <NavbarComponent>
      <div className="tableouterDiv">
        <div className="d-flex justify-content-between">
          <h2>Ebook Listing</h2>
          <button className="btn btn-primary" onClick={() => setOpen(!open)}>
            Add Ebook
          </button>
        </div>
        <div className="mt-4">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Ebook Title</th>
                <th>Ebook Author</th>
                <th>Ebook Genre</th>
                <th>Ebook Review</th>
                <th>Favorite</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {ebookList?.length > 0 &&
                ebookList.map((ebook) => (
                  <tr>
                    <td>{ebook.e_id}</td>
                    <td>{ebook.ebook_title}</td>
                    <td>{ebook.ebook_author}</td>
                    <td>{ebook.ebook_genre}</td>
                    <td>{ebook.ebook_review}</td>
                    <td>{ebook.ebook_favorite}</td>
                    <td>
                      <img
                        src="/edit.png"
                        alt="edit"
                        width="20"
                        onClick={() => onHandleEbook(ebook.e_id)}
                      />
                    </td>
                    <td>
                      <img
                        src="/delete.png"
                        alt="delete"
                        onClick={() => onHandleDelete(ebook.e_id)}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
        <CommonModal open={open} onClose={setOpen}>
          <div className="ebookDiv">
            <h3>{edit ? "Edit" : "Add New"} Ebook</h3>
            <div className="d-flex flex-column">
              <Form.Label>Ebook Title</Form.Label>
              <FormInput
                type="text"
                placeholder="Enter ebook title"
                className="input-class"
                value={data.ebook_title}
                onChange={(e) =>
                  setData({ ...data, ebook_title: e.target.value })
                }
              />
            </div>
            <div className="d-flex flex-column">
              <Form.Label>Ebook Author</Form.Label>
              <FormInput
                type="text"
                placeholder="Enter author Name"
                className="input-class"
                value={data.ebook_author}
                onChange={(e) =>
                  setData({ ...data, ebook_author: e.target.value })
                }
              />
            </div>
            <div className="d-flex flex-column">
              <Form.Label>Genre</Form.Label>
              <FormInput
                type="text"
                placeholder="Enter genre"
                className="input-class"
                value={data.ebook_genre}
                onChange={(e) =>
                  setData({ ...data, ebook_genre: e.target.value })
                }
              />
            </div>
            <div className="d-flex flex-column">
              <Form.Label>Ebook Review</Form.Label>
              <FormInput
                type="text"
                placeholder="Enter review"
                className="input-class"
                value={data.ebook_review}
                onChange={(e) =>
                  setData({ ...data, ebook_review: e.target.value })
                }
              />
            </div>
            <div className="d-flex flex-column">
              <Form.Label>Favorite</Form.Label>
              <FormInput
                type="text"
                placeholder="Enter favorite"
                className="input-class"
                value={data.ebook_favorite}
                onChange={(e) =>
                  setData({ ...data, ebook_favorite: e.target.value })
                }
              />
            </div>

            <div className="d-flex justify-content-center mt-5 w-80">
              <button
                className="btn btn-primary"
                onClick={() =>
                  edit ? OnHandleUpdateSubmit() : OnHandleSubmit()
                }
              >
                {edit ? "Edit" : "Add New"} Ebook
              </button>
            </div>
          </div>
        </CommonModal>
      </div>
    </NavbarComponent>
  );
}
