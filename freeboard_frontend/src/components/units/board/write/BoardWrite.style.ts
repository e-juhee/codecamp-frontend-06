import styled from "@emotion/styled";
import { ICreateButtonProps } from "./BoardWrite.types";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1200px;
  margin: 100px auto;
  padding: 60px 100px 100px 100px;
  border: 1px solid gray;
`;
export const Title = styled.div`
  font-family: "Noto Sans CJK KR";
  font-size: 36px;
  font-weight: 700;
`;
export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-top: 40px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Label = styled.div`
  display: flex;
  justify-content: row;
  padding: 25px 0px 16px 0px;
  font-size: 16px;
  line-height: 16px;
`;
export const Required = styled.div`
  padding-left: 5px;
  color: hotpink;
`;
export const ShortInput = styled.input`
  width: 495px;
  height: 52px;
  padding: 14px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  font-family: -apple-system;
`;
export const Error = styled.div`
  padding-left: 5px;
  color: red;
  font-size: 11px;
`;
export const Input = styled.input`
  width: 100%;
  height: 52px;
  padding: 14px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
`;
export const ContentInput = styled.textarea`
  width: 100%;
  height: 480px;
  padding: 14px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
`;
export const ZipCodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 217px;
`;
export const ZipCode = styled.input`
  width: 77px;
  height: 52px;
  margin-bottom: 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
`;
export const ZipCodeButton = styled.button`
  width: 124px;
  height: 52px;
  border: 1px solid green;
  border-radius: 5px;
  background: green;
  color: white;
  cursor: pointer;
`;
export const Address = styled.input`
  height: 52px;
  margin-bottom: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
`;
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 100%;
  padding-bottom: 40px;
`;
export const ImageButton = styled.button`
  width: 78px;
  height: 78px;
  background: #bdbdbd;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
export const ImageIcon = styled.div`
  padding-bottom: 5px;
  font-size: 28px;
`;
export const ImageLabel = styled.div`
  font-family: "Noto Sans CJK KR";
  font-size: 13px;
`;
export const Image = styled.img`
  width: 78px;
  height: 78px;
  margin: 0px 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;
export const SettingWrapper = styled.div`
  width: 100%;
`;
export const Radio = styled.input`
  cursor: pointer;
  appearance: none;
  width: 13px;
  height: 13px;
  border-radius: 100%;
  border: 2px solid orange;

  &:checked {
    appearance: none;
    background: #ffd600;
  }
`;
export const RadioLabel = styled.label`
  padding-right: 22px;
`;
export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  border-radius: 5px;
  background-color: ${(props: ICreateButtonProps) =>
    props.isActive ? "#FFD600;" : "#BDBDBD;"};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    border-radius: 5px;
    background: darkkhaki;
    font-weight: 900;
    letter-spacing: 5px;
  }
`;
