import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { HttpError } from '../../exceptions/exceptions';
import { HttpCode, StorageKey, ExceptionMessage } from '../../common/enums/enums';
import { ActionType } from './common';


const getWordList = createAsyncThunk(
  ActionType.GET_WORD_LIST,
  async (request, { extra: { services } }) => {
    const {currentPage, currentGroup} = request;
    const wordList = await services.textBook.getWord({currentPage, currentGroup});
    return { wordList } ;
  }
);

const setCurentPage = createAction(ActionType.SET_PAGE, (currentPage) => ({
  payload: {
    currentPage
  }
}));

const setCurentGroup = createAction(ActionType.SET_GROUP, (currentGroup) => ({
  payload: {
    currentGroup
  }
}));

const setPlayList = createAction(ActionType.SET_PLAY_LIST, (wordPlayList) => ({
  payload: {
    wordPlayList
  }
}));

const playPlayList = createAction(ActionType.PLAY_PLAY_LIST, () => ({
  payload: {
    isPlay: true
  }
}));

const stopPlayList = createAction(ActionType.STOP_PLAY_LIST, () => ({
  payload: {
    isPlay: false,
  }
}));

const addDificultWord = createAction(ActionType.ADD_DIFFICULT_WORD, (wordId) => ({
}));

const addLearnedWord = createAction(ActionType.ADD_LEARNED_WORD, (wordId) => ({
}));

const deleteDificultWord = createAction(ActionType.DELETE_DIFFICULT_WORD, (wordId) => ({
}));

const deleteLearnedWord = createAction(ActionType.DELETE_LEARNED_WORD, (wordId) => ({
}));

const getWordListDifficult = createAction(ActionType.GET_DIFFICULT_WORD_LIST, (wordId) => ({
}));



export {
   getWordList,
   setCurentPage,
   setCurentGroup,
   playPlayList,
   stopPlayList,
   setPlayList,
   addDificultWord,
   addLearnedWord,
   deleteDificultWord,
   deleteLearnedWord,
   getWordListDifficult
   };
