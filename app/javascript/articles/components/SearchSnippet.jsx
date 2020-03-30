import { h } from 'preact';
import { articleSnippetResultPropTypes } from '../../src/components/common-prop-types';

export const SearchSnippet = ({ highlightText }) => {
  if (highlightText && highlightText.body_text.length > 0) {
    const hitHighlights = highlightText.body_text;
    let bodyTextSnippet = '';

    if (hitHighlights[0] && hitHighlights[0] !== '') {
      const firstSnippetChar = hitHighlights[0];

      let startingEllipsis = '';
      if (firstSnippetChar.toLowerCase() !== firstSnippetChar.toUpperCase()) {
        startingEllipsis = '…';
      }
      bodyTextSnippet = `${startingEllipsis + hitHighlights.join('...')}…`;
    }

    if (bodyTextSnippet.length > 0) {
      return (
        <div className="search-snippet">
          <span>{bodyTextSnippet}</span>
        </div>
      );
    }
  }

  return null;
};

SearchSnippet.propTypes = {
  // eslint-disable-next-line no-underscore-dangle
  highlightText: articleSnippetResultPropTypes.isRequired,
};

SearchSnippet.displayName = 'SearchSnippet';
