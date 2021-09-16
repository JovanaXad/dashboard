import { useState } from "react";
import { SubContainer, Table, Container } from "src/components/ui";
import { Modal } from "src/components/widgets";
import { TableWidget } from "src/components/widgets";

const Title: React.FC<{ data: object[] }> = ({ data }): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] =
    useState<{ title: string; page: string }>();

  const modalHandler = (title: string, page: string): void => {
    setShowModal((prevModal) => !prevModal);
    if (title) setModalContent({ title, page });
  };

  return (
    <SubContainer>
      {showModal && (
        <Modal
          modalContent={modalContent}
          modalHandler={modalHandler}
          url="/api/titles/update-title"
        />
      )}
      <Container
        maxWidth="150rem"
        alignItem="center"
        justifyContent="center"
        height="100%"
      >
        <Table onClick={modalHandler} data={data} />
      </Container>
    </SubContainer>
  );
};

export default Title;
