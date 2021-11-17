class UsersController < ApplicationController
# our Car model is an ActiveRecord
  #(R)ead
  def index
    # here we grab all cars
    users = User.all
    # render cars
    render component: "Users", props: {users: users}
  end

  def show
    user = User.find(params[:id])
    
    render component: "User", props: {user: user}
  end

  def new

    render component: "NewUser"
  end

  def create
    User.create(
        fullName: params[:name],
        age: params[:age],
        gender: params[:gender]
        )
    index
  end


  def edit
    user = User.find(params[:id])
    render component: "UpdateUser", props: {id: params[:id]}
  end

  def update

    user = User.find(params[:id])

    user.update(
        fullName: params[:fullName], 
        age: params[:age],
        gender: params[:gender]
    )
    
  end


  def destroy
    user = User.find(params[:id])
    user.destroy
    index
  end

  private

  def car_params
  end
end

