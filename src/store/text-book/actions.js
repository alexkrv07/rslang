import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { StatusWord} from '../../common/enums/enums';
import { ActionType } from './common';

const getWordList = createAsyncThunk(
  ActionType.GET_WORD_LIST,
  async (request, { extra: { services } }) => {
    const {currentPage, currentGroup} = request;
    const wordList = await services.textBook.getWord({currentPage, currentGroup});
    return { wordList } ;
  }
);

// const setCurentPage = createAsyncThunk(
//   ActionType.SET_PAGE,
//   async (page, { getState, extra: { services } }) => {
//     const currentPage = page;
//     console.log(currentPage)
//     const { textbook: {currentGroup} } = getState();
//     console.log(currentGroup)
//     const wordList = await services.textBook.getWord({currentPage, currentGroup});
//     return { wordList, currentGroup } ;
//   }
// );

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

const addDificultWord = createAsyncThunk(
  ActionType.ADD_DIFFICULT_WORD,
  async (request, { dispatch, getState, extra: { services } }) => {
    const {wordId, userId} = request;
    const payload = {
      "difficulty": StatusWord.DIFFICULT,
      "optional": {}
    }
    console.log({wordId, userId, payload})
    const { textbook: {learnedWordList }} = getState();
    console.log(learnedWordList)
    if (!learnedWordList.includes(wordId)) {
      await services.textBook.addDifficultWord({wordId, userId, payload});
    } else {
      console.log('add difficult')
      await services.textBook.updateDifficultWord({wordId, userId, payload});
    }
    console.log('userId', userId)
    return dispatch(getWordListDifficult(userId));
  }
);

const addLearnedWord = createAsyncThunk(
  ActionType.ADD_DIFFICULT_WORD,
  async (request, { dispatch, getState, extra: { services } }) => {
    const {wordId, userId} = request;
    const payload = {
      "difficulty": StatusWord.LEARNED,
      "optional": {}
    }
    const { textbook: {difficultWordList} } = getState();
    if (!difficultWordList.includes(wordId)) {
      await services.textBook.addDifficultWord({wordId, userId, payload});
    } else {
      await services.textBook.updateDifficultWord({wordId, userId, payload});
    }
    return dispatch(getWordListDifficult(userId));
  }
);

const deleteDificultWord = createAction(ActionType.DELETE_DIFFICULT_WORD, (wordId) => ({
}));

const deleteLearnedWord = createAction(ActionType.DELETE_LEARNED_WORD, (wordId) => ({
}));

const getWordListDifficult = createAsyncThunk(
  ActionType.GET_DIFFICULT_WORD_ID_LIST,
  async (userId, { extra: { services } }) => {
    console.log(userId)
    const wordIdList = await services.textBook.getDifficultWordIdList(userId);
    const difficultWordList = wordIdList.filter(wordId => wordId.difficulty === StatusWord.DIFFICULT ).map(wordId => wordId.wordId);
    const learnedWordList = wordIdList.filter(wordId => wordId.difficulty === StatusWord.LEARNED ).map(wordId => wordId.wordId);

    return { difficultWordList, learnedWordList };
  }
);

const getWordListDifficultWordList = createAsyncThunk(
  ActionType.GET_DIFFICULT_WORD_LIST,
  async (_request, { getState,  extra: { services } }) => {
    const { textbook: {difficultWordList} } = getState();
    const wordList = await services.textBook.getDifficultWordList(difficultWordList);
    return { wordList };
  }
);

const getWordListLearnedWordList = createAsyncThunk(
  ActionType.GET_LEARNED_WORD_LIST,
  async (_request, { getState,  extra: { services } }) => {
    const { textbook: {learnedWordList} } = getState();
    const wordList = await services.textBook.getDifficultWordList(learnedWordList);
    return { wordList };
  }
);




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
   getWordListDifficult,
   getWordListLearnedWordList,
   getWordListDifficultWordList
   };
