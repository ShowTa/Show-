class ArticlesController < ApplicationController

  skip_before_action :authenticate_user!, only: [:index, :show]

  def index
    @articles = Article.publishd

    @tags = Article.all.first.tag_list

    user = User.all

    @articles_and_users = []
    @articles.each do |article|
      post = {}
      post[:article] = article
      post[:user] = User.writen_article(article.user_id)
      @articles_and_users << post
    end
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

    redirect_to :root
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
<<<<<<< HEAD
    params.require(:article).permit(:title, :content, :tag_list,)
=======
    params.require(:article).permit(:title, :content)
>>>>>>> 03934afcc572f3dbb94b36173b0236b46c293d08
  end
end
