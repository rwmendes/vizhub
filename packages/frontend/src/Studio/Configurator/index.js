import React from 'react';
import {
  Wrapper,
  File,
  Header,
  HeaderIcon,
  HeaderTitle,
  Widget,
  WidgetTitle,
  WidgetValue
} from './styles';
import { ArrowBackSVG } from '../../icons';
import { Section } from './Section';

const files = ['index.html', 'index.js', 'styles.css'];

const DesignSection = () => (
  <Section title="Design" isOpen={true}>
    <Widget>
      <WidgetTitle>Color</WidgetTitle>
      <WidgetValue fill="#e66465" />
    </Widget>
    <Widget isLast={true}>
      <WidgetTitle>Color</WidgetTitle>
      <WidgetValue fill="#e66465" />
    </Widget>
  </Section>
);

const CodeSection = ({ files, onFileClick }) => (
  <Section title="Code">
    {files.map(file => (
      <File key={file} onClick={() => onFileClick(file)}>
        {file}
      </File>
    ))}
  </Section>
);

export const Configurator = ({ onCloseClick, onFileClick }) => (
  <Wrapper>
    <Header onClick={onCloseClick}>
      <HeaderIcon>
        <ArrowBackSVG fill={'white'} />
      </HeaderIcon>
      <HeaderTitle>Configurator</HeaderTitle>
    </Header>
    <DesignSection />
    <CodeSection files={files} onFileClick={onFileClick} />
    <Section title="Settings" />
  </Wrapper>
);
