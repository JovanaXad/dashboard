import styled from "styled-components";
import { Textarea, Button } from "src/components/ui";
import { useForm } from "react-hook-form";
import { server } from "config/server";

const ModalContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  width: 100rem;
  height: 15rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  box-shadow: 0 1px 1rem rgb(26 26 36 / 15%);
  font-size: 3rem;
`;

const P = styled.p`
  font-size: 2rem;
`;

const Modal: React.FC<{
  modalContent: { title: string; page: string };
  modalHandler: any;
}> = ({ modalContent: { title, page }, modalHandler }): JSX.Element => {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm();

  const fetchChange = async () => {
    modalHandler();
    const data = { title: watch("title"), page };
    const { title } = data;

    if (title) {
      try {
        const response = await fetch(`${server}/api/titles/update-title`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const x = await response.json();
      } catch (error) {
        console.log("test", error);
      }
    }
  };

  return (
    <ModalContainer>
      <P>Izmeni title:</P>
      <Textarea defaultValue={title} rows={4} {...register("title")} />
      <Button type="submit" onClick={fetchChange}>
        Submit
      </Button>
    </ModalContainer>
  );
};

export default Modal;
