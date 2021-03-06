import React from 'react'

const login = () => {
    return (
        <div>
 
	<div class="container h-100">
		<div class="d-flex justify-content-center h-100">
			<div class="user_card">
				<div class="d-flex justify-content-center">
					<div class="brand_logo_container">
						<img src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-png-transparent.png" class="brand_logo" alt="Logo"/>
					</div>
				</div>
				<div class="d-flex justify-content-center form_container">
					<form>
						<div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-user"></i></span>
							</div>
							<input type="text" name="" class="form-control input_user" value={this.props.username} onChange={this.updateUsername} placeholder="username"/>
						</div>
						<div class="input-group mb-2">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-key"></i></span>
							</div>
							<input type="password" name="" class="form-control input_pass" value={this.props.username} onChange={this.updateUsername} placeholder="password"/>
						</div>
						<div class="form-group">
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="customControlInline"/>
								<label class="custom-control-label" for="customControlInline">Remember me</label>
							</div>
						</div>
							<div class="d-flex justify-content-center mt-3 login_container">
				 	<button type="button" onClick={this.signup} name="button" class="btn login_btn">Signup</button>
                     <span>Or</span>
                     <button type="button" onClick={this.login} name="button" class="btn login_btn">Login</button>
 
				   </div>
					</form>
				</div>
		
				
			</div>
		</div>
	</div>

        </div>
    )
}

export default login;
