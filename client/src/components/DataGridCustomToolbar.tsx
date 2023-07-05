import { GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport } from "@mui/x-data-grid";
import FlexBetween from "./FlexBetween";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
interface DataGridCustomToolbarProps {
    searchInput: string
    setSearchInput: React.Dispatch<React.SetStateAction<string>>
    setSearch: React.Dispatch<React.SetStateAction<string>>
}
function DataGridCustomToolbar({ searchInput, setSearchInput, setSearch }: DataGridCustomToolbarProps) {
    return (
        <GridToolbarContainer>
            <FlexBetween width='100%'>
                <FlexBetween>
                    <GridToolbarColumnsButton />
                    <GridToolbarDensitySelector />
                    <GridToolbarExport />
                </FlexBetween>
                <TextField
                    label='Search...'
                    sx={{ mb: '0.5rem', width: '15rem' }}
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={searchInput}
                    variant='standard'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                onClick={() => {
                                    setSearch(searchInput)
                                    setSearchInput('')
                                }}
                                >
                                    <Search />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </FlexBetween>
        </GridToolbarContainer>
    )
}

export default DataGridCustomToolbar