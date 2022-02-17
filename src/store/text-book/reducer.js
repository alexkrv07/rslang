import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import * as textbookActions from './actions';

const initialState = {
  currentPage: 0,
  currentGroup: 0,
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
    state.isLoading = false;
  });
  builder.addCase(textbookActions.getWordList.pending, state => {
    state.isLoading = true;
    state.isPlay = false;
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
});

export { reducer };
