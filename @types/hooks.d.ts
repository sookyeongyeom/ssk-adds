import { MutableRefObject } from 'react';

/**
 * @for useSlide */
type useSlideParams<T extends HTMLElement> = {
	targetRef: MutableRefObject<T>;
	isOpen: boolean;
};

/**
 * @for useBoard */
type useBoard<T> = {
	dep: T | undefined;
	order: Map<string, string>;
};
