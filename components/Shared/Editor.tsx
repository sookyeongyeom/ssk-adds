import QuillEditor from 'react-quill';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';
import { EditorProps } from '../../@types/shared';

const modules = {
	toolbar: [
		[{ header: '1' }, { header: '2' }, { font: [] }],
		['italic', 'underline', 'strike', 'blockquote'],
		[{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
		['image', 'video'],
	],
	clipboard: {
		matchVisual: false,
	},
};

const formats = [
	'header',
	'font',
	'size',
	'bold',
	'italic',
	'underline',
	'strike',
	'blockquote',
	'list',
	'bullet',
	'indent',
	'link',
	'image',
	'video',
];

export default function Editor({ value, onChange }: EditorProps) {
	return (
		<S.EditorLayout>
			<QuillEditor
				modules={modules}
				formats={formats}
				theme={'snow'}
				placeholder={'게시글을 작성해주세요'}
				style={{ height: '50rem' }}
				value={value}
				onChange={onChange as any}
			/>
		</S.EditorLayout>
	);
}

namespace S {
	export const EditorLayout = styled.div`
		box-sizing: content-box;
		margin: 1rem 3rem;
		height: 54.1rem;
		background-color: white;
	`;
}
