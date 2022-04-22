import styled from "@emotion/styled";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 1024px;
  height: 1000px;
  margin: 100px auto;
`;

export const Error = styled.div`
  color: #f57e00;
  font-size: 14px;
  margin-top: 8px;
`;

export const Title = styled.div`
  font-size: 26px;
  font-family: "NanumSquareR";
  padding-bottom: 30px;
  border-bottom: 2px solid rgb(30, 29, 41);
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid rgb(220, 219, 228);
  padding: 2rem 0px;
`;
export const Label = styled.div`
  font-family: "NanumSquareR";
  font-size: 18px;
  width: 168px;
`;
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: space-between;
  width: 856px;
  overflow: scroll;
`;
export const ImageUpload = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  padding: 75px;
  background-color: #fafafc;
  border: 1px solid rgb(195, 194, 204);
  cursor: pointer;
`;
export const ImageUploadLabel = styled.div`
  font-size: 14px;
  color: gray;
  text-align: center;
  width: 70px;
  padding-top: 10px;
`;
export const CameraIcon = styled.img`
  width: 30px;
`;
export const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-left: 10px;
  border: 1px solid lightgray;
  cursor: pointer;
  :hover {
    border: 5px solid #f57e00;
  }
`;
export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 168px;
`;
export const NecessaryLabel = styled.div`
  font-family: "NanumSquareR";
  font-size: 18px;
  width: auto;
`;
export const Necessary = styled.span`
  color: #ff5058;
`;
export const InputErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  border: 1px solid rgb(195, 194, 204);
  width: 856px;
  height: 46px;
  padding: 0px 1rem;
`;

export const TextArea = styled.textarea`
  border: 1px solid rgb(195, 194, 204);
  width: 856px;
  height: 166px;
  padding: 1rem;
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export const Button = styled.button`
  width: 170px;
  font-size: 20px;
  padding: 15px 0;
  color: white;
  border: none;
  background-color: black;
  border-radius: 3px;
`;
