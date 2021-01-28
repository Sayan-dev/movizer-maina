import React, { useState } from 'react'
import { Container, Grid, makeStyles, MenuItem, TextField } from '@material-ui/core'
import Button from '../../../commons/Button/Button'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const useStyles = makeStyles((theme) => ({
    searchBox: {

        width: "62%",
        margin: '5em auto 3em auto',

    },
    searchButton: {
        height: "100%"


    },
    field: {
        "& .MuiSelect-select": {
            minWidth: "80px"
        }
    }

}
));

function SearchField({
    onchange = () => { },
    value,
    select,
    selectItems,
    label,
    required = false,
    ...props
}) {
    const classes = useStyles()
    return <Grid item>

        <TextField className={classes.field} select={select} variant="outlined" label={label} required={required} onChange={(e) => onchange(e.target.value)} value={value} id={label} aria-describedby={"helper-text-" + label} >
            {select ?
                selectItems.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))
                : null
            }
        </TextField>



    </Grid>
}


function SearchCatagory({ searchHandler,isLoading, ...props }) {
    const classes = useStyles()

    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")
    const [plot, setPlot] = useState("")


    const handleSearchSubmit = async (e) => {
        e.preventDefault()

 

        searchHandler({
            title,
            year,
            plot
        })


    }

    const yearList = [
        {
            value: "",
            label: "All"
        }
    ]
    const plotList = [
        {
            value: "Short",
            label: "Short"
        },
        {
            value: "Full",
            label: "Full"
        }
    ]

    for (let index = 1995; index <= new Date().getFullYear(); index++) {
        const element = {
            value: index,
            label: `${index}`
        };
        yearList.push(element)

    }

    return (
        <Container className={classes.searchBox}>
            <form onSubmit={handleSearchSubmit}>
                <Grid container spacing={3} >
                    <SearchField
                        onchange={setTitle}
                        label="Title"
                        value={title}
                        required={true}
                    />
                    <SearchField
                        onchange={setYear}
                        label="Year"
                        select
                        selectItems={
                            yearList
                        }
                        value={year}
                    />
                    <SearchField
                        onchange={setPlot}
                        label="Plot"
                        select
                        selectItems={
                            plotList
                        }
                        value={plot}

                    />
                    <Grid item>
                        <Button className={classes.searchButton} type="submit" color="primary"
                            isLoading={isLoading}
                            endIcon={(<>

                                <SearchOutlinedIcon />
                            </>)}

                        >Search</Button>
                    </Grid>


                </Grid>


            </form>


        </Container>
    )
}

export default SearchCatagory

