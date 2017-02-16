class ArticlesController < ApplicationController

  skip_before_action :authenticate_user!, only: [:index, :show]

  def index
    @articles = Article.publishd
  end

  def draft_index
    @drafts = Article.draft
  end

  def show
    @article = Article.find(params[:id])
    @comment = Comment.new
    @comments = Comment.all
  end

  def new
    @article = Article.new
  end

  def create
<<<<<<< HEAD
    Article.create(article_params)
=======
    if params[:commit] == '公開'
      current_user.articles.create(article_params.merge(status: 1))
    else
      current_user.articles.create(article_params.merge(status: 0))
    end

>>>>>>> cec394e5b05e0dc4ac440d7c07c8da6ed3868edb
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
    params.require(:article).permit(:title, :content)
  end
end
