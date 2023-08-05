import styled from 'styled-components';

const FileUploadPrimary = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 34px;
    width: 110px;
    font-size: 12px;
    font-weight: bold;
    border: 1px solid #c5c5c5;
    background-color: white;
    transition: all 0.3s;
    &:hover {
        cursor: pointer;
        background-color: #e7e7e7;
        border: 1px solid blue;
    }
`;

const FileUploadPrimaryParagraph = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 34px;
    width: 95px;
    font-size: 12px;
    font-weight: bold;
    border: 1px solid #c5c5c5;
    background-color: white;
    transition: all 0.3s;
    &:hover {
        cursor: pointer;
        background-color: #e7e7e7;
        border: 1px solid blue;
    }
`;

const FileUploadSecondary = styled.div`
    height: 34px;
    font-size: 12px;
    font-weight: bold;
    border: 1px solid #c5c5c5;
    background-color: #212121;
    transition: all 0.3s;
    color: #ededed;
    margin-left: 3px;
    margin-right: 3px;
    &:hover {
        background-color: #3c3c3c;
        border: 1px solid blue;
        color: white;
    }
`;

const FileUploadInput = styled.input`
    display: none;
`;

const FilesPreviewContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
`;

const FilesPreviewElement = styled.div`
    display: flex;
    gap: 5px;
    flex-direction: column;
`;

export {
    FileUploadPrimary,
    FileUploadPrimaryParagraph,
    FileUploadSecondary,
    FileUploadInput,
    FilesPreviewContainer,
    FilesPreviewElement,
};
