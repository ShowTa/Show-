class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])

    @articles = @user.articles.page(params[:page]).per(4).order('created_at DESC')
    if params[:favorite] == ''
      @user_articles = Article.find(@user.id)
    end
  end
end
