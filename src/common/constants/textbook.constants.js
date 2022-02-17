const GROUP_NUMBERS = '6';
const PAGE_NUMBERS = '20';
const PAGE_ARRAY = [];
const GROUP_ARRAY = [];

for (let groupNumber = 0; groupNumber < GROUP_NUMBERS; groupNumber++) {
  GROUP_ARRAY.push(groupNumber);
}

for (let pageNumber = 0; pageNumber < PAGE_NUMBERS; pageNumber++) {
  PAGE_ARRAY.push(pageNumber);
}


export { GROUP_NUMBERS, PAGE_NUMBERS, PAGE_ARRAY, GROUP_ARRAY };
