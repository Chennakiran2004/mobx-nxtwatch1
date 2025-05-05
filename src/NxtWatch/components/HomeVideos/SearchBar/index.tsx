import React from "react";
import { BsSearch } from "react-icons/bs";
import { SearchContainer, SearchInput, SearchButton } from "../styles";
import { useTheme } from "../../../../Common/Context/ThemeContext";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onSearch }) => {
  const { isDarkTheme } = useTheme();
  const theme = isDarkTheme ? "dark" : "light";
  const color = isDarkTheme ? "#f9f9f9" : "#181818";
  return (
    <SearchContainer>
      <SearchInput
        theme={theme}
        type="search"
        placeholder="Search"
        onChange={onChange}
        value={value}
        data-testid="searchInput"
      />
      <SearchButton
        theme={theme}
        type="button"
        data-testid="searchButton"
        onClick={onSearch}
      >
        <BsSearch color={color} />
      </SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;
