import { useState } from 'react';
import { ListGroup, Button, Modal, Form } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import './styles/transationlist.css';
import {FaPlus} from "@react-icons/all-files/fa/FaPlus";

function TranslationListItem({ word, translation, onDelete, onEdit }) {
    const [showModal, setShowModal] = useState(false);
    const [editedWord, setEditedWord] = useState(word);
    const [editedTranslation, setEditedTranslation] = useState(translation);

    const handleCloseModal = () => {
        setShowModal(false);
        setEditedWord(word);
        setEditedTranslation(translation);
    };

    const handleSaveChanges = () => {
        onEdit(editedWord, editedTranslation);
        handleCloseModal();
    };

    const isSmallScreen = useMediaQuery({ query: '(max-width: 576px)' });

    return (
        <>
            <ListGroup.Item className={`d-flex justify-content-between align-items-center flex-column flex-md-row ${isSmallScreen ? 'text-center' : ''}`}>
                <div style={{ minWidth: '50%' }} className={isSmallScreen ? 'mb-2 mb-md-0' : ''}>
                    <h5 className="mb-0">{word}</h5>
                    <p className="text-muted mb-0">{translation}</p>
                </div>
                <div>
                    <Button variant="outline-danger" className="mr-2 delete-btn" onClick={onDelete}>
                        Удалить
                    </Button>
                    <Button variant="outline-primary" className="edit-btn" onClick={() => setShowModal(true)}>
                        Редактировать
                    </Button>
                </div>
            </ListGroup.Item>

            <Modal show={showModal} onHide={handleCloseModal} style={{ marginTop: '20vh' }}>
                <Modal.Header closeButton>
                    <Modal.Title>Редактирование перевода</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formWord">
                            <Form.Label>Слово</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Введите слово"
                                value={editedWord}
                                onChange={(e) => setEditedWord(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formTranslation">
                            <Form.Label>Перевод</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Введите перевод"
                                value={editedTranslation}
                                onChange={(e) => setEditedTranslation(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Отмена
                    </Button>
                    <Button variant="primary" onClick={handleSaveChanges}>
                        Сохранить изменения
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}



function TranslationList({ translations }) {
    const [list, setList] = useState(translations);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newWord, setNewWord] = useState('');
    const [newTranslation, setNewTranslation] = useState('');

    const handleDeleteTranslation = (index) => {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    };

    const handleEditTranslation = (index, newWord, newTranslation) => {
        const newList = [...list];
        newList[index] = { word: newWord, translation: newTranslation };
        setList(newList);
    };

    const handleAddTranslation = () => {
        const newTranslationObj = { word: newWord, translation: newTranslation };
        setList([...list, newTranslationObj]);
        setNewWord('');
        setNewTranslation('');
        setShowAddModal(false);
    };

    return (
        <div>
            <ListGroup className="list-group">
                {list.map((translation, index) => (
                    <TranslationListItem
                        key={index}
                        word={translation.word}
                        translation={translation.translation}
                        onDelete={() => handleDeleteTranslation(index)}
                        onEdit={(newWord, newTranslation) =>
                            handleEditTranslation(index, newWord, newTranslation)
                        }
                    />
                ))}
            </ListGroup>

            <div className="fixed-add-button">
                <Button variant="success" onClick={() => setShowAddModal(true)}>
                    <FaPlus/>
                </Button>
            </div>

            <Modal style={{ marginTop: '20vh' }} show={showAddModal} onHide={() => setShowAddModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавление нового перевода</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formWord">
                            <Form.Label>Слово</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Введите слово"
                                value={newWord}
                                onChange={(e) => setNewWord(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formTranslation">
                            <Form.Label>Перевод</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Введите перевод"
                                value={newTranslation}
                                onChange={(e) => setNewTranslation(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowAddModal(false)}>
                        Отмена
                    </Button>
                    <Button variant="primary" onClick={handleAddTranslation}>
                        Добавить перевод
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}


export default TranslationList;