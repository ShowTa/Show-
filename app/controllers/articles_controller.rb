class ArticlesController < ApplicationController
  def index
    @articles = Article.all
  end

  def new
    @article = Article.new
  end

  def create
    Article.create(article_params)

    redirect_to action: :index
  end

  def edit
  end

  def update
  end

  def delete
  end

  private

  def article_params
    params.require(:article).permit(:title, :content)
  end
end
