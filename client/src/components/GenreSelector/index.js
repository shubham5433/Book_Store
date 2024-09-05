import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from 'react-router-dom';

const GenreSelector = () => {
    const genres = ['thriller', 'romance', 'young adult', 'science fiction', 'fantasy', 'poetry', 'biography', 'self help'];
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                aria-controls="genre-menu"
                aria-haspopup="true"
                onClick={handleClick}
                style={{boxShadow:"none"}}
            >
                Select Genre <ArrowDropDownIcon/>
            </Button>
            <Menu
                id="genre-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {genres.map((genre) => (
                    <MenuItem key={genre} onClick={handleClose}>
                        <Link 
                            style={{ textDecoration: 'none', color: 'inherit' }}
                            to={`/genre/${genre.split(' ').join('-')}`}
                        >
                            {genre}
                        </Link>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export default GenreSelector;
