import React from "react";
import { SearchBarContainer, Input, SearchButton } from "./styledComponents";
import { BsSearch } from "react-icons/bs";
import { useTheme } from "styled-components";

type SearchBarProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onSearch }) => {
  const theme = useTheme();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSearch();
    }
  };

  return (
    <SearchBarContainer onSubmit={(e) => e.preventDefault()}>
      <Input
        type="text"
        value={value}
        placeholder="Search..."
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <SearchButton type="button" onClick={onSearch}>
        <BsSearch size={20} color={theme.textColor} />
      </SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
