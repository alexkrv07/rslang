import { createReducer } from '@reduxjs/toolkit';
import * as textbookActions from './actions';
import { StatusWordList } from '../../common/enums/enums';

const initialState = {
  currentPage: 0,
  currentGroup: 0,
  typeShowWordList: StatusWordList.WORD_LIST,
  isLoading: false,
  isPlay: false,
  difficultWordList: [],
  wordList: [],
  learnedWordList: [],
  wordPlayList: {
    currentWordId: null,
    wordPlayList: []
  }

};

const reducer = createReducer(initialState, builder => {
  builder.addCase(textbookActions.getWordList.fulfilled, (state, action) => {
    const { wordList } = action.payload;
    state.wordList = wordList;
    state.typeShowWordList = StatusWordList.WORD_LIST;
    state.isLoading = false;
  });
  builder.addCase(textbookActions.getWordList.pending, state => {
    state.isLoading = true;
    state.isPlay = false;
    state.wordPlayList = {
      currentWordId: null,
      wordPlayList: []
    }
  });
  builder.addCase(textbookActions.setCurentPage, (state, action) => {
    const { currentPage } = action.payload;
    state.currentPage = currentPage;
  });
  builder.addCase(textbookActions.setCurentGroup, (state, action) => {
    const { currentGroup } = action.payload;
    state.currentGroup = currentGroup;
  });
  builder.addCase(textbookActions.setPlayList, (state, action) => {
    const { wordPlayList } = action.payload;
    state.wordPlayList = wordPlayList;
    state.isPlay = true;
  });
  builder.addCase(textbookActions.playPlayList, (state, action) => {
    const { isPlay } = action.payload;
    state.isPlay = isPlay;
  });
  builder.addCase(textbookActions.stopPlayList, (state, action) => {
    const { isPlay } = action.payload;
    state.wordPlayList = {
      currentWordId: null,
      wordPlayList: []
    }
    state.isPlay = isPlay;
  });
  builder.addCase(textbookActions.getWordListDifficult.fulfilled, (state, action) => {
    const { difficultWordList, learnedWordList} = action.payload
    state.difficultWordList = difficultWordList;
    state.learnedWordList = learnedWordList;
    state.isLoading = false;
  });
  builder.addCase(textbookActions.getWordListDifficult.pending, state => {
    state.isLoading = true;
  });
  builder.addCase(textbookActions.getWordListDifficultWordList.fulfilled, (state, action) => {
    const { wordList } = action.payload;
    state.wordList = wordList;
    state.typeShowWordList = StatusWordList.DIFFICULT_WORD_LIST;
    state.isLoading = false;
  });
  builder.addCase(textbookActions.getWordListDifficultWordList.pending, state => {
    state.isLoading = true;
  });
});

export { reducer };
