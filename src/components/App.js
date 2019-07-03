import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Filter from "./Filter";
import BanishedHogs from "./BanishedHogs";
import HogList from "./HogList";

class App extends Component {
  state = {
    greased: false,
    sortBy: "",
    banished: [],
    showBanished: false
  };

  showHiddenHogs = () => {
    this.setState({ showBanished: !this.state.showBanished });
  };

  banishHog = banishedHog => {
    this.setState({ banished: [...this.state.showBanished, banishedHog] });
  };

  hanleToggleGreased = () => {
    this.setState({ greased: !this.state.greased });
  };

  handleSelectChange = e => {
    this.setState({ sortBy: e.target.value });
  };

  filterBanished = () => {
    if (this.state.banished.length > 0) {
      return hogs.filter(hog => {
        return this.state.banished.indexOf(hog) === -1;
      });
    } else {
      return hogs;
    }
  };

  filterGreased = () => {
    let unbanishedHogs = this.filterBanished();
    if (this.state.greased) {
      return unbanishedHogs.filter(hog => hog.greased);
    } else {
      return unbanishedHogs;
    }
  };

  sortHogs = () => {
    let previouslyFiltered = this.filterGreased();
    switch (this.state.sortBy) {
      case "weight":
        return previouslyFiltered.sort((a, b) => {
          const weight =
            "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";
          return a[weight] - b[weight];
        });
      case "name": {
        return previouslyFiltered.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      default: {
        return previouslyFiltered;
      }
    }
  };

  render() {
    return (
      <div className="ui grid container App">
        <div className="sixteen wide column centered">
          <Nav />
        </div>
        <div>
          <Filter
            hanleToggleGreased={this.hanleToggleGreased}
            handleSelectChange={this.handleSelectChange}
            showBanished={
              this.state.banished.length === 0 ? null : this.showHiddenHogs
            }
          />
        </div>
        <div className="fourteen wide column centered">
          {this.state.showBanished ? (
            <BanishedHogs fetchGIF={this.fetchGIF} hogs={this.state.banished} />
          ) : null}
        </div>
        <div className="sixteen wide column centered">
          <HogList
            handleBanishedClick={this.banishHog}
            hogs={this.sortHogs()}
          />
        </div>
      </div>
    );
  }
}

export default App;
