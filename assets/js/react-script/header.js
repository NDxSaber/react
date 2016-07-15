//-- Create Object
			var data	= {
				base_url: "<?php echo $logo;?>",
			};

	        var Header = React.createClass({
				render: function() {
					return (
						<div className="commentBox">
							<div className="line-tiket"></div>
							<div className="container pos-relative">
								<img className="web-logo" src={this.props.data.logo} />
							</div>
						</div>
					);
				}
			});

			ReactDOM.render(<Header data={data} />, document.getElementById('header'));