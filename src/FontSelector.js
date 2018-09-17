import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactFontFace from 'react-font-face'
import * as R from 'ramda'
import logo from './logo.svg'

import prototypeF from './fonts/regular/Prototype.ttf'
import goodTimes from './fonts/regular/GoodTimesRg.ttf'
import pirulen from './fonts/regular/PirulenRg.ttf'
import ratio from './fonts/regular/Ratio.ttf'
import rexlia from './fonts/regular/RexliaRg.ttf'
import vandiana from './fonts/regular/Vandiana_Platin_Lite.ttf'
import zekton from './fonts/regular/zektonRg.ttf'

import elianto from './fonts/title/Elianto-Regular.ttf'
import nasalization from './fonts/title/Nasalization.ttf'
import neogreyRegular from './fonts/title/NeogreyRegular.otf'
import neogreyMedium from './fonts/title/NeogreyMedium.otf'
import phageRough from './fonts/title/PhageRough.otf'
import phageRegular from './fonts/title/Marske.ttf'
import marske from './fonts/title/Marske.ttf'

const TITLE_TEXT = 'UNTITLED'
const SUBTITLE_TEXT = 'An Asteroid Mining Game'
const BUTTONS = {
  TITLE: 'TITLE',
  SUBTITLE: 'SUBTITLE'
}

const fontRows = [
  { title: 'nasalization', subtitle: 'nasalization' },
  { title: 'elianto', subtitle: 'elianto' },
  { title: 'neogreyRegular', subtitle: 'neogreyRegular' },
  { title: 'neogreyMedium', subtitle: 'neogreyMedium' },
  { title: 'phageRough', subtitle: 'phageRough' },
  { title: 'phageRegular', subtitle: 'phageRegular' },
  { title: 'marske', subtitle: 'marske' },

  { title: 'prototypeF', subtitle: 'prototypeF' },
  { title: 'goodTimes', subtitle: 'goodTimes' },
  { title: 'pirulen', subtitle: 'pirulen' },
  { title: 'ratio', subtitle: 'ratio' },
  { title: 'rexlia', subtitle: 'rexlia' },
  { title: 'vandiana', subtitle: 'vandiana' },
  { title: 'zekton', subtitle: 'zekton' },
]

const makeConfig = (name, file, type) => {
  const fontType = type || 'truetype'
  return {
    fontFamily: name,
    fontStyle: 'subtitle',
    fontWeight: 400,
    file,
    fontType,
  }
}

const fontConfig = {
  file: [
    makeConfig('elianto', elianto),
    makeConfig('nasalization', nasalization),
    makeConfig('neogreyRegular', neogreyRegular, 'opentype'),
    makeConfig('neogreyMedium', neogreyMedium, 'opentype'),
    makeConfig('phageRegular', phageRegular, 'opentype'),
    makeConfig('phageRough', phageRough, 'opentype'),
    makeConfig('marske', marske),
    makeConfig('prototypeF', prototypeF),
    makeConfig('goodTimes', goodTimes),
    makeConfig('pirulen', pirulen),
    makeConfig('ratio', ratio),
    makeConfig('rexlia', rexlia),
    makeConfig('vandiana', vandiana),
    makeConfig('zekton', zekton),
  ]
}

const getOffset = (el) => {
  const rect = el.getBoundingClientRect();
  return {
    right: rect.right + window.scrollX,
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
    bottom: rect.bottom + window.scrollY
  };
}

const ThemeSquare = (props) => {
  const { color } = props;
  return (
    <div className={`${props.squareType || 'square' } ${color}`}>
    </div>
  )
}

const ThemeSquares = (props) => {
  return (
    <div className="theme-squares">
      <ThemeSquare color="bg-color0" squareType="square0" />
      <ThemeSquare color="bg-color1" squareType="square1" />
      <ThemeSquare color="bg-color2" squareType="square2" />
      <ThemeSquare color="bg-color3" squareType="square3" />
      <ThemeSquare color="bg-color4" squareType="square4" />
    </div>
  )
}

class Nav extends Component {
  activeIf = (path) => {
    const { match } = this.props;
    return match.path === path ?
           'active' :
           ''
  }

  render() {
    return (
      <div className="navbar">
        <a href="/theme1" className={`fancy-link ${this.activeIf('/theme1')}`}>Theme 1</a>
        <a href="/theme2" className={`fancy-link ${this.activeIf('/theme2')}`}>Theme 2</a>
        <a href="/theme3" className={`fancy-link ${this.activeIf('/theme3')}`}>Theme 3</a>
        <a href="/theme4" className={`fancy-link ${this.activeIf('/theme4')}`}>Theme 4</a>
      </div>
    )
  }
}

class FontRow extends Component {
  render() {
    const {
      titleFont,
      subtitleFont,
      title,
      subtitle,
      className,
      ref,
      titleInputRef,
      onTitleChange,
      onSubtitleChange,
      titleClassName,
      subtitleClassName,
    } = this.props;

    const styles = {
      title: {
        fontSize: '3rem',
        fontFamily: titleFont,
        marginBottom: 0,
      },
      subtitle: {
        fontSize: '1.5rem',
        fontFamily: subtitleFont,
        marginTop: '.05rem',
      },
      titleNotes: {
        fontFamily: titleFont,
        fontSize: '1rem',
      },
      subtitleNotes: {
        fontFamily: subtitleFont,
        fontSize: '1rem',
      }
    }

    return (
      <div className={`${className}`} ref={ref}>
        <div className="content-row-content">
          {onTitleChange ?
            <h1
              style={styles.title}
            >
              <input
                ref={titleInputRef}
                className={`fancy-input ${titleClassName}`}
                type="text"
                style={styles.title}
                onChange={onTitleChange}
                value={title}
              />
            </h1> :
            <h1
              className="has-title-text-color"
              style={styles.title}
            >
              {title}
            </h1>
          }
          {onSubtitleChange ?
            <h2
              style={styles.subtitle}
            >
              <input
                className={`fancy-input ${subtitleClassName}`}
                type="text"
                style={styles.subtitle}
                onChange={onSubtitleChange}
                value={subtitle}
              />
            </h2> :
            <h2
              className="has-subtitle-text-color"
              style={styles.subtitle}
            >
              {subtitle}
            </h2>
          }

          <h4>
            <span style={styles.titleNotes}>
              {titleFont}
            </span>
            { titleFont !== subtitleFont && (
              <span style={styles.subtitleNotes}>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                {subtitleFont}
              </span>
            )}
          </h4>
        </div>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: TITLE_TEXT,
      subtitle: SUBTITLE_TEXT,
      chooserTitleFont: fontRows[0].title,
      chooserSubtitleFont: fontRows[0].subtitle,
      currentRow: fontRows[0],
      buttonsFlashing: [],
    }

    this.chooser = React.createRef()
  }

  onTitleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  onSubtitleChange = (e) => {
    this.setState({ subtitle: e.target.value })
  }

  setFontRowRef = (row) => (element) => {
    this[this.refName(row)] = element
  }

  refName = ({ title }) => {
    return `fontRow_${title}`
  }

  updateCurrentRow = (newCurrentRow) => {
    const { currentRow } = this.state;

    if (currentRow !== newCurrentRow) {
      this.flashButtonsAndSetState([BUTTONS.TITLE, BUTTONS.SUBTITLE])(
        { currentRow: newCurrentRow }
      )
    }
  }

  useCurrentTitle = () => {
    const { currentRow } = this.state
    this.flashButtonsAndSetState([BUTTONS.TITLE])(
      { chooserTitleFont: currentRow.title }
    )
  }

  useCurrentSubtitle = () => {
    const { currentRow } = this.state
    this.flashButtonsAndSetState([BUTTONS.SUBTITLE])(
      { chooserSubtitleFont: currentRow.subtitle }
    );
  }

  flashButtonsAndSetState = (buttons) => (newState) => {
    this.setState({ ...newState, buttonsFlashing: buttons }, () => {
      window.setTimeout(() => {
        this.setState({ buttonsFlashing: [] })
      }, 200)
    })
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.titleInput).focus()

    window.onscroll = (e) => {
      const fixed = ReactDOM.findDOMNode(this.chooser.current)
      const fixedPosition = fixed.offsetTop
      const fixedHeight = fixed.clientHeight
      const fixedRect = getOffset(fixed)

      R.forEach((row) => {
        const name = this.refName(row)
        const ref = this[this.refName(row)]
        const node = ReactDOM.findDOMNode(ref)
        const nodeRect = getOffset(node)

        if (fixedRect.bottom >= nodeRect.top &&
            fixedRect.bottom <= nodeRect.bottom) {
          this.updateCurrentRow(row)
         }
      }, fontRows)
    }
  }

  render() {
    const { title, subtitle, chooserTitleFont, chooserSubtitleFont, buttonsFlashing } = this.state;
    return (
      <div className="App">
        <header>
          {/* <Nav {...this.props } />*/}
          <ThemeSquares />
        </header>

        <div className="content">
          {fontRows.map((row, i) => (
            <FontRow
              className="content-row has-background-color compare-to"
              key={i}
              ref={this.setFontRowRef(row)}
              title={title}
              subtitle={subtitle}
              titleFont={row.title}
              subtitleFont={row.subtitle}
            />
          ))}
        </div>
        <div
          className="chooser-overlay"
          ref={this.chooser}
        >
          <FontRow
            titleFont={chooserTitleFont}
            subtitleFont={chooserSubtitleFont}
            title={title}
            titleInputRef={(el) => this.titleInput = el}
            subtitle={subtitle}
            titleClassName="has-title-text-color"
            subtitleClassName="has-subtitle-text-color"
            onTitleChange={this.onTitleChange}
            onSubtitleChange={this.onSubtitleChange}
          />
          <span>
            <button
              className={`fancy-button has-flash ${R.contains(BUTTONS.TITLE, buttonsFlashing) ? "flashing" : "not-flashing"}`}
              type="submit"
              onClick={this.useCurrentTitle}
            >
              Use Title
            </button>
            <button
              className={`fancy-button has-flash ${R.contains(BUTTONS.SUBTITLE, buttonsFlashing) ? "flashing" : "not-flashing"}`}
              type="submit"
              onClick={this.useCurrentSubtitle}
            >
              Use Subtitle
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default ReactFontFace(App, fontConfig);
