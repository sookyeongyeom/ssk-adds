/**
 * @base */
type IsCurrentType = {
	isCurrent: boolean;
};

/**
 * @base */
type IsHoverType = {
	isHover: boolean;
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
type ItemProps = Partial<IsCurrentType> & {};

/**
 * @in FAQPage */
type FAQBoxProps = {
	isOpen: boolean;
};

/**
 * @in ResearchPage */
type ResearchBoxProps = IsHoverType & {};

/**
 * @in AdjacentNavigator */
type AdjacentNavigatorLayoutProps = {
	isPrevExist: boolean;
	isNextExist: boolean;
};

/**
 * @in View */
type ViewLayoutProps = {
	isNotice: boolean;
};

/**
 * @in PageButton */
type NumberButtonProps = IsCurrentType & {};
