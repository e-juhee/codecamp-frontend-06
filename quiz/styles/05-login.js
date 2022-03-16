import styled from "@emotion/styled";

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 640px;
    height: 1138px;
    margin: 100px auto;
    background-image: url(../bg.png);
    background-size: 640px 1138px;
`;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 640px;
    height: 1138px;
    /* opacity: 0.2; */
     background-color: rgba(0,0,0,0.1);
    padding: 50px;
`;

export const Title = styled.div`
  font-size: 60px;
    color: white;
    font-weight: bold;
    width: 100%;
    text-align: center;
`;

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  padding-top: 18px;
  width: 100%;
`;

export const Email = styled.input`
  width: 100%;
  height: 53px;
  padding-left: 16px;
  border: 1px solid #D2D2D2;
  border-radius: 7px;
`;

export const EmailError = styled.div`
  width: 100%;
  text-align: center;
  color: red;
  font-size: 11px;
`;
export const Name = styled.input`
  width: 100%;
  height: 53px;
  padding-left: 16px;
  border: 1px solid #D2D2D2;
  border-radius: 7px;
`;

export const NameError = styled.div`
  width: 100%;
  text-align: center;
  color: red;
  font-size: 11px;
`;
export const Password = styled.input`
  width: 100%;
  height: 53px;
  padding-left: 16px;
  border: 1px solid #D2D2D2;
  border-radius: 7px;
`;

export const PasswordError = styled.div`
  width: 100%;
  text-align: center;
  color: red;
  font-size: 11px;
`;
export const Password2 = styled.input`
  width: 100%;
  height: 53px;
  padding-left: 16px;
  border: 1px solid #D2D2D2;
  border-radius: 7px;
`;

export const Password2Error = styled.div`
  width: 100%;
  text-align: center;
  color: red;
  font-size: 11px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 18px;
`;

export const PhoneWrapper = styled.div`
  padding-top: 18px;
  width: 100%;
`;

export const PhoneNumber = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 18px;
  width: 100%;
`;

export const Phone1 = styled.input`
  width: 100px;
  height: 40px;
  padding-left: 16px;
  border: 1px solid #D2D2D2;
  border-radius: 7px;
`;

export const Phone2 = styled.input`
  width: 100px;
  height: 40px;
  padding-left: 16px;
  border: 1px solid #D2D2D2;
  border-radius: 7px;
`;

export const Phone3 = styled.input`
  width: 100px;
  height: 40px;
  padding-left: 16px;
  border: 1px solid #D2D2D2;
  border-radius: 7px;
`;

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-top: 18px;
  width: 100%;
`;
export const AuthNumber = styled.div`
  color: #0068FF;
    font-size: 18px;
`;
export const SendButton = styled.button`
    width: 120px;
    height: 40px;
    border-radius: 7px;
    margin-left: 20px;
    border: 1px solid #D2D2D2;
    font-size: 16px;
    color: #0068FF; 
    background-color: white;
    cursor: pointer;
`;

export const Timer = styled.div`
    color: #0068FF;
    font-size: 18px;
`;

export const CompleteButton = styled.button`
    width: 120px;
    height: 40px;
    border-radius: 7px;
    margin-left: 20px;
    border: 1px solid #D2D2D2;
    font-size: 16px;
    color: #0068FF; 
    background-color: white;
    cursor: pointer;
`;


export const Location = styled.select`
    margin-top: 20px;
    width: 100%;
    height: 60px;
    border: 1px solid #D2D2D2;
    border-radius: 7px;
    font-size: 16px;
    padding: 18px;
    color: #797979;
`;

export const LocationOption = styled.option`

`;
export const LocationError = styled.div`
  width: 100%;
  text-align: center;
  color: red;
  font-size: 11px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding-top: 40px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const OptionError = styled.div`
  width: 100%;
  text-align: center;
  color: red;
  font-size: 11px;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 30px;
  margin-bottom: 30px;
`;


export const SubmitButton = styled.button`
    width: 100%;
    height: 75px;
    border-radius: 10px;
    font-size: 18px;
    background-color: #FFFFFF; 
    color: #0068FF; 
    border: 1px solid #0068FF ;
    cursor: pointer;
`;
