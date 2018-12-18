import { Component, Prop } from '@stencil/core';
import CommunityDropdown from './community-dropdown';
import { Close, Ionic, Menu, NewTab } from '../../icons';

@Component({
  tag: 'docs-header',
  styleUrl: 'docs-header.scss'
})
export class DocsHeader {
  @Prop() section: string;
  @Prop() isMenuOpen = false;
  @Prop() onToggleClick: () => void;

  getGithubLink(section) {
    switch (section) {
      case 'cli':
        return 'https://github.com/ionic-team/ionic-cli';
      default:
        return 'https://github.com/ionic-team/ionic';
    }
  }

  render() {
    return (
      <nav>
        <button
          onClick={this.onToggleClick}
          class="menu-toggle">
            { this.isMenuOpen ? <Close/> : <Menu/> }
        </button>
        <a href="/docs/" class="docs-logo"><Ionic/><span>Docs</span></a>
        <ionic-search>
        </ionic-search>
        <CommunityDropdown/>
        <a href={this.getGithubLink(this.section)}
           class="github-link"
           target="_blank">GitHub<NewTab/></a>
        <a href="https://github.com/ionic-jp/ionic-docs"
           class="github-link"
           target="_blank">翻訳に協力する<NewTab/></a>
      </nav>
    );
  }
}
