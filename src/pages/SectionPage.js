import React, { useEffect, useState} from 'react';
import {API_URL} from '../api/api';
import navItems from '../data/navItems.json';
import AppNav from '../components/AppNav/AppNav.js';
import { useHistory, useParams } from 'react-router-dom';
import ArticleList from '../components/ArticleList/ArticleList';

const  SectionPage = () => {
    //Use webhook use state
    //creates nav menu
    //sets nav item line 49
    const[navItem] = useState(navItems);
    //sets news article from api
    //line 67 
    const[news,setNews] = useState([]);
    //sets byline title
    //line 56
    const[filterKey,setFilterKeys] = useState('title');
    //Onkeyup sets the filter value 
    const [ searchText, setSearchText ] = React.useState('');
    //refers to line 54 pushes url to browser
    const history = useHistory()
    const params = useParams()
    useEffect(()=>{
      //line 23 check the value of the api
        let url = API_URL+'articles?filter={"where":{"section":"'+params.sectionID+'"}} ';
        //if  user will enter blank value in search box then it will call line 16 and if user will enter any text in search box then it will call line 19
        if(searchText !== ''){
        url = API_URL+'articles?filter={"where":{"'+filterKey+'":{"ilike":"'+searchText+'"}}}' ;
        } 
        fetch(url) 
        .then((response) => { 
            return response.json();
        })
        .then((responseData) => {   
        setNews(responseData);
        })
        .catch((error) => {
        alert("Please check your API");
        })
        
    },[searchText,filterKey,params]);
    //check value by title and byline
    const setFilterKey = (e)=>{
    //this call line 11
        setFilterKeys(e.target.value);
    }
    ///setting value for line 23 

    const handleSearch = (e) =>{
        setSearchText(e.target.value);
}
        return (
            <div>
                {/*creating a new Nav menu and pushing new url to browser without page reload */}
            <AppNav navItems={navItem} handleNavClick={(clickedItem) => {history.push("/"+clickedItem)}} />
            {/* creating the byline and the title  */}
            <div className="row">
                <div className="col-md-3">
                <div className="form-group">
                    {/* creating the dropdown box  and the options for the byline box*/}
                <select className="form-control" onChange={(e)=>{setFilterKey(e)}}>
                <option value="title">Title</option>
                <option value="byline">Byline</option>
                </select>
                </div>
                </div>
                <div className="col-md-6">
                <div className="form-group">
                <input type="text" className="form-control" placeholder="Please enter your search key..." onKeyUp={(e)=>{handleSearch(e)}}/>
                </div>
                </div>
            </div>
            {/*  creates news article list*/}
            <ArticleList articles={news} handleTitleClick={(articleID) =>{history.push('/articles/'+articleID);} } />
            </div>
        );
    }

export default SectionPage
