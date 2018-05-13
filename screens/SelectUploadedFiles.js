import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { debounce } from 'lodash'
import { colors, fontSizes } from '../constants/styles'

import SearchList from '../components/SearchList'
import Button from '../components/Button'

import DOC from '../assets/images/file_doc.png'
import XLS from '../assets/images/file_xls.png'
import PDF from '../assets/images/file_pdf.png'

export default class UploadedFiles extends React.Component {
  constructor(props) {
    super(props);
    sections = [
      {
        title: "TODAY",
        data: [
          {name: "Blood test - Lab report.pdf", extension: "pdf", selected: true},
          {name: "Meeting notes.doc", extension: "doc", selected: false},
          {name: "Surgery action items.xlsx", extension: "xlsx", selected: true},
          {name: "Anesthesiology report.pdf", extension: "pdf", selected: false}]
      },
      {
        title: "LAST WEEK",
        data: [
          {name: "Blood test - Lab report", extension: "pdf", selected: false},
          {name: "Meeting note", extension: "doc", selected: false},
          {name: "Surgery action items", extension: "xlsx", selected: false},
          {name: "Anesthesiology report", extension: "pdf", selected: false}]
      }
    ]
    this.state = { sections }
    this.allSections = sections;
    this.filterFiles = debounce(this.filterFiles, 200);
  }

  _onSelect(item, index, section) {
      let newSections = this.state.sections.slice();
      newSections.forEach((s) => {
        if(section.title === s.title) {
          s.data[index].selected = !section.data[index].selected;
        }
      })
      this.setState({sections: newSections});
  }

  _returnRenderItem() {
    var _this = this; //TODO: hack, closure to store context, replace it with an action when using redux for onPress handler
    return function _renderItem({item, index, section}) {
        return (
          <TouchableOpacity style={[styles.row, {backgroundColor: item.selected ? colors.lightBlue : colors.white}]} onPress={(e) => _this._onSelect(item, index, section)}>
            <Image source={_this._getImageByExtension(item.extension)} />
            <Text style={[styles.name]}>{item.name}</Text>
          </TouchableOpacity>
        )
    }
  }

  _getImageByExtension(extension) {
    const icons = {
      'pdf':  PDF,
      'xls':  XLS,
      'xlsx': XLS,
      'doc':  DOC,
      'docx': DOC,
      'txt':  DOC
    }

    return icons[extension]
  }

  _renderSectionHeader({section: {title}}) {
    return (
      <View style={styles['section']}>
        <Text style={{color: colors.text}}>{title}</Text>
      </View>
    )
  }

  filterFiles = (text) => {
    text = text.toLowerCase();
    //todo regexp for alphabets only
    // if(!text.length || !/[a-z]+$/.test(text)) return this.setState({sections: this.allSections});
    // let section;
    // section = this.allSections.filter((obj) => obj.title === text[0].toUpperCase()).pop();
    // let newSection = {title: section.title, data: section.data.filter((obj) => obj.name.toLowerCase().search(text) >= 0)}
    // return this.setState({sections: [newSection]});
  }

  _onUpload = () => {

  }

  render() {
    let button = null;
    let selectedCount = 0;
    sections.forEach((section) => {
      section.data.forEach((obj) => {
        if(obj.selected) ++selectedCount
      })
    });

    if(selectedCount > 0) {
      button = (
        <View style={{paddingVertical: 16, paddingHorizontal: 48, backgroundColor: colors.white}}>
          <Button size="lg" onPress={this._onUpload}>Upload the {selectedCount} selected files</Button>
        </View>
      )
    }

    return (
      <View style={styles['container']}>
        <SearchList
          onSelect={this._onSelect}
          onSearch={this.filterFiles}
          renderItem={this._returnRenderItem()}
          renderSectionHeader={this._renderSectionHeader}
          sections={this.state.sections}
          title="files"></SearchList>
        {button}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: colors.background
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderBottomWidth: 1,
    borderColor: colors.dark.background,
    backgroundColor: colors.white
  },
  name: {
    marginLeft: 8,
    color: colors.dark.text
  }
})
