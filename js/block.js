const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'mdlr/styles-jsx-example', {
	title: __( 'Block Styles JSX Example' ),
	icon: 'admin-appearance',
	category: 'common',
	edit( { className } ) {
		return (
			<div className={ className }>
				<p>Block with styles. Built with JSX.</p>
			</div>
		);
	},
	save( { className } ) {
		return (
			<div className={ className }>
				<p>Block with styles. Built with JSX.</p>
			</div>
		);
	},
} );
