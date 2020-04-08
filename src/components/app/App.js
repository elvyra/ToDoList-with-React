import React, { Component } from "react";
import "./App.scss";

import { Switch, Route } from "react-router-dom";

import nextId from "react-id-generator";

import Container from "react-bootstrap/Container";

import NavBar from "../navBar/NavBar";
import DataToTable from "../dataToTable/DataToTable";
import NewListItem from "../newListItem/NewListItem";
import Search from "../search/Search";

let initialData = [
  {
    id: nextId(),
    icon: "",
    subject: "Launch new website",
    priority: 2,
    duteDate: "",
    percentCompleted: 100,
    modifiedOn: "04/05/2018 01:51 PM"
  },
  {
    id: nextId(),
    icon: "faGem",
    subject: "Corporate Rebranding",
    priority: 0,
    duteDate: "",
    percentCompleted: 75,
    modifiedOn: "04/05/2018 01:52 PM"
  },
  {
    id: nextId(),
    icon: "",
    subject: "Staf Training",
    priority: 2,
    duteDate: "04/06/2018",
    percentCompleted: 100,
    modifiedOn: "04/05/2018 01:54 PM"
  },
  {
    id: nextId(),
    icon: "",
    subject: "Collateral for Annual Expo",
    priority: 2,
    duteDate: "04/23/2018",
    percentCompleted: 25,
    modifiedOn: "04/05/2018 01/54 PM"
  },
  {
    id: nextId(),
    icon: "",
    subject: "Expand Marketing Team",
    priority: 1,
    duteDate: "04/28/2018",
    percentCompleted: 0,
    modifiedOn: "04/05/2018 01:52 PM"
  },
  {
    id: nextId(),
    icon: "",
    subject: "New Product Launch",
    priority: 0,
    duteDate: "",
    percentCompleted: 25,
    modifiedOn: "04/05/2018 01:55 PM"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: initialData,
      searchText: ""
    };
    this.NewItemPush = this.NewItemPush.bind(this);
    this.ItemCheckedDone = this.ItemCheckedDone.bind(this);
    this.ItemDeleteDone = this.ItemDeleteDone.bind(this);
    this.HandleSearch = this.HandleSearch.bind(this);
  }

  HandleSearch(text) {
    this.setState({ searchText: text });
    console.log(text);
    console.log(this.state.searchText);
  }

  NewItemPush(newItem) {
    let newItemWithId = newItem;
    newItemWithId["id"] = nextId();
    let newList = this.state.data;
    newList.push(newItemWithId);
    this.setState({ data: newList });
  }

  ItemCheckedDone(itemId) {
    let itemIndex = this.state.data.map(item => item.id).indexOf(itemId);
    let newItem = this.state.data[itemIndex];
    newItem.percentCompleted = 100;
    let temp = this.state.data;
    temp[itemIndex] = newItem;
    this.setState({ data: temp });
  }

  ItemDeleteDone(itemId) {
    let itemIndex = this.state.data.map(item => item.id).indexOf(itemId);
    let temp = this.state.data;
    temp.splice(itemIndex, 1);
    this.setState({ data: temp });
  }

  render() {
    return (
      <div>
        <NavBar />
        <Container className="my-5">
          <main>
            <Switch>
              <Route exact path="/">
                <DataToTable
                  data={this.state.data}
                  ItemCheckedDone={this.ItemCheckedDone}
                  ItemDeleteDone={this.ItemDeleteDone}
                />
              </Route>
              <Route path="/new">
                <NewListItem NewItemPush={this.NewItemPush} />
                <DataToTable
                  data={this.state.data}
                  ItemCheckedDone={this.ItemCheckedDone}
                  ItemDeleteDone={this.ItemDeleteDone}
                />
              </Route>
              <Route path="/search">
                <Search
                  data={this.state.data.map(item => item.subject)}
                  text={this.state.searchText}
                  handleSearch={this.HandleSearch}
                />
                <DataToTable
                  data={this.state.data.filter(item =>
                    item.subject
                      .toLowerCase()
                      .includes(this.state.searchText.toLowerCase())
                  )}
                  ItemCheckedDone={this.ItemCheckedDone}
                  ItemDeleteDone={this.ItemDeleteDone}
                />
              </Route>
            </Switch>
          </main>
        </Container>
      </div>
    );
  }
}

export default App;
