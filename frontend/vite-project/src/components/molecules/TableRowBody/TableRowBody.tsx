import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  StyledRow,
  StyledTableRowBody,
  StyledDivider,
  StyledInputName,
  StyledInputSurname,
  StyledInputEmail,
  StyledInputAge,
  StyledInputsButtons,
  StyledEditedButtons,
  StyledDeletedButtons,
  StyledModalChildren,
} from './style';
import Input from '../../atoms/Input';
import Modal from '../../atoms/Modal';
import Pagination from '../../atoms/Pagination';
import { IUser } from '../../../shared/api/type';

const TableRowBody = () => {
  const [allUsers, setAllUsers] = useState<IUser[]>([]);
  const [deletingUserId, setDeletingUserId] = useState<string | null>(null);
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [editedName, setEditedName] = useState('');
  const [editedSurname, setEditedSurname] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const [editedAge, setEditedAge] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const itemsPerPage = 10;

  useEffect(() => {
    fetchUsers();
  }, [currentPage, allUsers]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users');
      setAllUsers(response.data);
      setTotalPages(Math.ceil(response.data.length / itemsPerPage));
    } catch (error) {
      error;
    }
  };

  const handleDelete = (userId: string) => {
    setDeletingUserId(userId);
  };

  const handleConfirmDelete = async () => {
    try {
      if (deletingUserId) {
        await axios.delete(`http://localhost:5000/api/users/${deletingUserId}`);
        await fetchUsers();
        setShowModal(true);
      }
      setDeletingUserId(null);
    } catch (error) {
      error;
    }
  };

  const handleCancelDelete = () => {
    setDeletingUserId(null);
  };

  const handleEdit = (userId: string) => {
    const user = allUsers.find((user) => user._id === userId);
    if (user) {
      setEditingUserId(userId);
      setEditedName(user.name);
      setEditedSurname(user.surname);
      setEditedEmail(user.email);
      setEditedAge(user.age.toString());
    }
  };

  const handleSave = async () => {
    try {
      if (editingUserId) {
        const editedUser = {
          name: editedName,
          surname: editedSurname,
          email: editedEmail,
          age: parseInt(editedAge),
        };
        await axios.put(
          `http://localhost:5000/api/users/${editingUserId}`,
          editedUser
        );
        await fetchUsers();
        setEditingUserId(null);
        setEditedName('');
        setEditedSurname('');
        setEditedEmail('');
        setEditedAge('');
      }
    } catch (error) {
      error;
    }
  };

  const handleCancelEdit = () => {
    setEditingUserId(null);
    setEditedName('');
    setEditedSurname('');
    setEditedEmail('');
    setEditedAge('');
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div>
        {allUsers
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((user) => (
            <StyledRow key={user._id}>
              {editingUserId === user._id ? (
                <StyledTableRowBody>
                  <Input
                    type='text'
                    value={editedName}
                    setValue={setEditedName}
                  />

                  <Input
                    type='text'
                    value={editedSurname}
                    setValue={setEditedSurname}
                  />
                  <Input
                    type='email'
                    value={editedEmail}
                    setValue={setEditedEmail}
                  />
                  <Input
                    type='number'
                    value={editedAge}
                    setValue={setEditedAge}
                  />

                  <StyledEditedButtons>
                    <button
                      onClick={() => handleSave(user._id)}
                      className='button is-success is-rounded is-responsive  is-focused is-inverted'
                    >
                      Išsaugoti
                    </button>
                    <button
                      onClick={() => handleCancelEdit(user._id)}
                      className='button is-danger is-rounded is-responsive  is-focused is-inverted'
                    >
                      Atšaukti
                    </button>
                  </StyledEditedButtons>
                </StyledTableRowBody>
              ) : (
                <StyledTableRowBody>
                  <StyledInputName>{user.name}</StyledInputName>
                  <StyledInputSurname>{user.surname}</StyledInputSurname>
                  <StyledInputEmail>{user.email}</StyledInputEmail>
                  <StyledInputAge>{user.age}</StyledInputAge>

                  {deletingUserId === user._id ? (
                    <div>
                      <div>Ar tikrai norite ištrinti?</div>
                      <StyledDeletedButtons>
                        <button
                          onClick={() => handleConfirmDelete(user._id)}
                          className='button is-success is-rounded is-responsive  is-focused is-inverted'
                        >
                          Taip
                        </button>
                        <button
                          onClick={() => handleCancelDelete(user._id)}
                          className='button is-danger is-rounded is-responsive  is-focused is-inverted'
                        >
                          Atšaukti
                        </button>
                      </StyledDeletedButtons>
                    </div>
                  ) : (
                    <StyledInputsButtons>
                      <button
                        onClick={() => handleEdit(user._id)}
                        className='button is-info is-rounded is-responsive  is-focused is-inverted'
                      >
                        Redaguoti
                      </button>
                      <button
                        onClick={() => handleDelete(user._id)}
                        className='button is-danger is-rounded is-responsive  is-focused is-inverted'
                      >
                        Ištrinti
                      </button>
                    </StyledInputsButtons>
                  )}
                </StyledTableRowBody>
              )}
            </StyledRow>
          ))}
        <StyledDivider></StyledDivider>
      </div>
      <Modal onClose={closeModal} isOpen={showModal}>
        <StyledModalChildren>
          Vartotojas ištrintas sėkmingai
        </StyledModalChildren>
      </Modal>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      ></Pagination>
    </div>
  );
};

export default TableRowBody;
