/**
 * @base */
type IsCurrentType = {
	isCurrent: boolean;
};

/**
 * @in HomeSlider */
type SliderImageWrapperProps = {
	slideIdx: number;
	isFlashed: boolean;
};

/**
 * @in HomeSlider
 * @in HomeCarousel */
type IndicatorProps = IsCurrentType & {};

/**
 * @in HomeCarousel */
type CarouselWrapperProps = {
	itemIdx: number;
};

/**
 * @in Sidebar */
type TopProps = IsCurrentType & {};

/**
 * @in LinkItem */
type CustomLinkProps = {
	isCurrent?: boolean;
};

/**
 * @in FAQPage */
type FAQBoxProps = {
	isOpen: boolean;
};
