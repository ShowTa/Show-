class ArticlesController < ApplicationController

  skip_before_action :authenticate_user!, only: [:index, :show]

  def index
    @articles = Article.publishd
    @tags = Article.all.first.tag_list
    @user = User.all
  end

  def draft_index
    @drafts = current_user.articles.draft
  end

  def show
    @article = Article.find(params[:id])
    @comment = Comment.new
    @comments = Comment.all
    @user = User.find(@article.user_id)
    @chk_favorite = Favorite.find_by(user_id: current_user.id, article_id: @article.id) if user_signed_in?
  end

  def new
    @article = Article.new
  end

  def create
    # binding.pry

    redirect_to action: :index
  end

  def edit
    @article = Article.find(params[:id])
  end

  def update
    article = Article.find(params[:id])
    article.update(article_params)

    redirect_to action: :index
  end

  def destroy
    Article.find(params[:id]).delete

    redirect_to action: :index
  end

  private

  def article_params
    params.require(:article).permit(:title, :content, :tag_list,)
  end
end
