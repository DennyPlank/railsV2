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

  #(C)reate
  def new
    # render new form
    render component: "NewUser"
  end

  def create
    # create car(from from UI) to our db

  end

  #(U)pdate
  def edit
    #we need to find car in DB to update
    user = User.find(params[:id])
    # render update form
    render component: "UpdateUser"
  end

  def update
    # find car to Update
    user = User.find(params[:id])
    # update car(from from UI) to our db
  end

  #(D)elete
  def destroy
    # find car to Delete
    user = User.find(params[:id])
    # Delete
    user.destroy
  end

  private

  def car_params
  end
end

