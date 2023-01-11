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
	isAdmin: boolean;
};

/**
 * @in PageButton */
type NumberButtonProps = IsCurrentType & {};

/**
 * @in FileUploadElement */
type DragAndDropProps = {
	isDragOver: boolean;
};

/**
 * @in AdminLayout
 * @in AdminSidebar */
type SidebarToggleProps = {
	isSidebarOpen: boolean;
};

/**
 * @in AdminSidebar */
type MenuProps = IsCurrentType & {};

/**
 * @in Board */
type BoardLayoutProps = {
	isAdmin: boolean;
};

/**
 * @in AdminButton */
type AdminButtonLayoutProps = {
	isOrange?: boolean;
	isRed?: boolean;
};

/**
 * @in PublicationEditPage */
type PrevProps = {
	isWishedToDelete?: boolean;
};

/**
 * @in Input */
type InputLayoutProps = {
	isBlue?: boolean;
};

/**
 * @in Header */
type isShortenType = {
	isShorten: boolean;
};

/**
 * @in Drawer */
type isOpenType = {
	isOpen: boolean;
};

/**
 * @in AddsLayout */
type hasPaddingType = {
	hasPadding: boolean;
};
