import QuillEditor from 'react-quill';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';
import { EditorProps } from '../../../@types/shared';
import { Colors } from '../../../styles/colors';

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

		> div {
			> div:first-of-type {
				border: 0.15rem solid ${Colors.gray150};
				border-radius: 0.6rem 0.6rem 0 0;
				white-space: nowrap;
				overflow: hidden;
			}

			> div:nth-of-type(2) {
				border: 0.15rem solid ${Colors.gray150};
				border-radius: 0 0 0.6rem 0.6rem;
				background-color: white;
				height: 60rem;
				overflow: hidden;
			}
		}
	`;
}
