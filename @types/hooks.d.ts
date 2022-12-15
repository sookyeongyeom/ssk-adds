import { MutableRefObject } from 'react';

/**
 * @for useSlide */
type useSlideParams<T extends HTMLElement> = {
	targetRef: MutableRefObject<T>;
	isOpen: boolean;
};
