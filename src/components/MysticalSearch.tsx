import { Input } from "antd";
import { useMemo } from "react";
import MysticalTypeSelector from "./MysticalTypeSelector.tsx";
import debounce from "lodash/debounce";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../utils/types.ts";
import { setSearchData } from "../store/searchSlice.ts";
import "./MysticalSearch.css";

const MysticalSearch = () => {
  const dispatch = useDispatch();
  const { searchType, searchValue } = useSelector(
    (state: AppState) => state.searchData
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchData({ searchValue: e.target.value }));
  };

  const onSearchTypeSelectorChange = (type: string) => {
    dispatch(setSearchData({ searchType: type }));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceCallback = useMemo(() => debounce(handleInputChange, 500), []);

  return (
    <div className="mystical-search-container">
      <Input
        placeholder="Search dark grimoire..."
        className="mystical-search"
        onChange={debounceCallback}
        addonAfter={
          <MysticalTypeSelector
            value={searchType}
            onChange={onSearchTypeSelectorChange}
          />
        }
        defaultValue={searchValue}
      />
    </div>
  );
};

export default MysticalSearch;
